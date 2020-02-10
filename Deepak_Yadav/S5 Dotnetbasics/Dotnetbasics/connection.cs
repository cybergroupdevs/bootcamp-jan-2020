using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Dotnetbasics
{
    class Dconnection
    {
        static public SqlConnection deepakConnection()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=localhost;Initial Catalog=practice.net;Integrated Security=True;";

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
