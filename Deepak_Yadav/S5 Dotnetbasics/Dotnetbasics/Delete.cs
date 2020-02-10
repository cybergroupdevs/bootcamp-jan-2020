using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Dotnetbasics
{
   public class Delete
    {
        static public void delete()
        {
            SqlConnection co = Dconnection.deepakConnection();
        
            try
            {
                co.Open();
                StringBuilder sb = new StringBuilder();
                //sb.Append("SELECT [id],[data] FROM [dbo].[netpractice] ");
               // sb.Append("update [dbo].[netpractice] set data='dpk' where id=1");
                sb.Append("DELETE FROM [dbo].[netpractice] where id=1");
                //sb.Append("FROM [SalesLT].[ProductCategory] pc ");
                //sb.Append("JOIN [SalesLT].[Product] p ");
                //sb.Append("ON pc.productcategoryid = p.productcategoryid;");
                String sql = sb.ToString();
                using (SqlCommand command = new SqlCommand(sql, co))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine("{0} {1}", reader.GetInt32(0), reader.GetString(1));
                        }
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }


        }

    }
}
