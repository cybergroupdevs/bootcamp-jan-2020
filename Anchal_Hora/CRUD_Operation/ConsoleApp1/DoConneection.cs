using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Dotnetsession
{
    class DoConneection
    {
        static public SqlConnection funcConnection()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();

                builder.ConnectionString = "Data Source=CYG366\\SQLEXPRESS;Initial Catalog=task;Integrated Security=True;";

                SqlConnection connection = new SqlConnection(builder.ConnectionString);
               
                    return connection;
             
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
                return null;
            }
        }
    }
}
